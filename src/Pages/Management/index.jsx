
import './Management.css';
import { Key } from '@Features/Key';
import { Links } from '@Features/Links';
import { Version } from '@Features/Version';

export const ManagementComponent = () => {
  return (
    <>
      <div className="left-wrapper">
        <Version />
        <Links />
      </div>
      <div className="right-wrapper">
        <Key />
      </div>
    </>
  );
}
