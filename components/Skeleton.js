export default function Skeleton() {
  return (
    <div className="skeleton">
      <div className="s-item s-banner"></div>
      <div className="s-item s-header"></div>
      <div className="s-item s-content"></div>
      <div className="s-item s-content"></div>
      <div className="s-item s-content"></div>
      <div className="s-item s-content"></div>

      <style jsx>{`
        .skeleton {
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          margin: 20px auto;
        }

        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }

        .s-item {
          display: inline-block;
          margin: 20px;
          height: 1em;
          position: relative;
          overflow: hidden;
          background-color: #dbcc1a;
          width: 100%;
        }
        .s-item::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: translateX(-100%);
          background-image: linear-gradient(
            0.25turn,
            transparent,
            #ffffff28,
            transparent
          );
          animation: shimmer 2s infinite;
          content: "";
        }

        .s-banner {
          padding: 12% 0;
        }
        .s-header {
          padding: 15px 0;
          max-width: 50%;
        }
        .s-content {
          padding: 8px 0;
          max-width: 1000px;
        }
      `}</style>
    </div>
  );
}
