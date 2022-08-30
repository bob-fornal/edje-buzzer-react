
import './Management.css';
import { Links } from '@Features/Links';
import { Version } from '@Features/Version';

export const ManagementComponent = () => {
  return (
    <>
      <div className="left-wrapper">
        <Version />
        <Links />
      </div>
      <div className="right-wrapper"></div>
    </>
  );
}
