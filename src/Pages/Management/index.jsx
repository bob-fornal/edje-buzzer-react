
import './Management.css';
import { Key, Links, Teams, Version } from '@Features';

export const ManagementComponent = () => {
  return (
    <>
      <div className="left-wrapper">
        <Version />
        <Teams />
        <Links />
      </div>
      <div className="right-wrapper">
        <Key />
      </div>
    </>
  );
}
