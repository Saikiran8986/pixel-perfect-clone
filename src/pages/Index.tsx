import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.location.href = "/site.html";
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center" }}>
      <p>Redirecting to static site...</p>
    </div>
  );
};

export default Index;
