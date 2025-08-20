import type { LogoImageProps } from "../../types";

const LogoImage: React.FC<LogoImageProps> = ({ makeClickable = false }) => {
  return (
    <>
      {makeClickable ? (
        <a href="/">
          <img
            src="./images/header_logo.png"
            alt="logo"
            width={60}
            height={60}
          />
        </a>
      ) : (
        <img src="./images/header_logo.png" alt="logo" width={60} height={60} />
      )}
    </>
  );
};

export default LogoImage;
