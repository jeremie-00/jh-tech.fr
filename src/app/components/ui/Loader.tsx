export const LoaderBars = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <title>Loading...</title>
    <style>{`
      .spinner-bar {
        animation: spinner-bars-animation .8s linear infinite;
        animation-delay: -.8s;

      }
      .spinner-bars-2 {
        animation-delay: -.65s;
        
      }
      .spinner-bars-3 {
        animation-delay: -0.5s;
      }
      @keyframes spinner-bars-animation {
        0% {
          y: 1px;
          height: 22px;
        }
        93.75% {
          y: 5px;
          height: 14px;
          opacity: 0.2;
          color: var(--color-primary);
        }
      }
    `}</style>
    <rect
      className="spinner-bar"
      x="1"
      y="1"
      width="6"
      height="22"
      fill="currentColor"
    />
    <rect
      className="spinner-bar spinner-bars-2"
      x="9"
      y="1"
      width="6"
      height="22"
      fill="currentColor"
    />
    <rect
      className="spinner-bar spinner-bars-3"
      x="17"
      y="1"
      width="6"
      height="22"
      fill="currentColor"
    />
  </svg>
);
