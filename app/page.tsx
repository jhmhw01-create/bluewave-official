export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #02142b 0%, #063a73 50%, #0b6cb8 100%)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "72px",
            letterSpacing: "8px",
            marginBottom: "20px",
          }}
        >
          BLUEWAVE
        </h1>

        <p
          style={{
            fontSize: "24px",
            opacity: 0.8,
            marginBottom: "40px",
          }}
        >
          THE TIDE OF YOUTH
        </p>

        <button
          style={{
            padding: "18px 50px",
            fontSize: "20px",
            borderRadius: "50px",
            border: "none",
            background: "#2ba8ff",
            color: "white",
            cursor: "pointer",
          }}
        >
          ENTER THE WAVE
        </button>
      </div>
    </main>
  );
}