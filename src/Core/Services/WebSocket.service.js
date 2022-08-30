
import { Observable } from 'rxjs';

import config from '@Core/Contants/config.json';

class WebSocketService {

  websocket = null;
  PIE_CLUSTER_ID = config.pie.CLUSTER_ID;
  PIE_CHANNEL_ID = config.pie.CHANNEL_ID;
  PIE_API_KEY = '';

  setApiKey(key) {
    this.PIE_API_KEY = key;
    this.connectWebSocket(WebSocket);
  }

  getPieSocketUrl(cluster, channel, apikey) {
    return `wss://${ cluster }.piesocket.com/v3/${ channel }?api_key=${ apikey }&notify_self`;
  }

  connectWebSocket(_websocket) {
    const url = this.getPieSocketUrl(this.PIE_CLUSTER_ID, this.PIE_CHANNEL_ID, this.PIE_API_KEY);

    try {
      this.websocket = new _websocket(url);
    } catch (error) {
      console.log(error);
    }
  }

  messagesOfType(type) {
    return new Observable(observer => {
      this.websocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (type === '~~ANY~~' || data.type === type) {
          observer.next(data);
        }
      };
    });
  }

  errorHandler() {
    return new Observable(observer => {
      this.websocket.onerror = (event) => {
        observer.next(event);
      };
    });
  }

  publish(message) {
    try {
      this.websocket.send(JSON.stringify(message));
    } catch (error) {
      console.log(error);
    }
  }

}

export const socket = new WebSocketService();
