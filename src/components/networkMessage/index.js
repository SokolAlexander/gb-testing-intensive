import { Offline, Online } from "react-detect-offline";

import './styles.css';

export default function NetworkMessage () {
  return (
    <>
      <Offline>
        <div className="offline">
          You're offline
        </div>
      </Offline>
    </>
  );
}
