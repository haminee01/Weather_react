import React, { useEffect, useState } from "react";

const CurrentTime = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval();
  });

  const time = new Intl.DateTimeFormat("ko-KR", {
    hour: "numeric",
    minute: "numeric",
  }).format(now);

  return <div>{time}</div>;
};

export default CurrentTime;
