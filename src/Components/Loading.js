import { Spin } from "react-cssfx-loading/lib";

export default function Loading() {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          height: "400px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin width="70px" height="70px" />
      </div>
    );
}