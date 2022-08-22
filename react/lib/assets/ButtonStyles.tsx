export default function ButtonStyles() {
  return (
    <style>
      {`
       .doppler-btn {
        all: initial;
        border: unset;
        display: flex;
        position: relative;
        justify-content: space-evenly;
        align-items: center;
        flex-shrink: 0;
        width: 92px;
        height: 35px;
        font-weight: 700;
        color: #fff;
        border-radius: 3px;
        cursor: pointer;
        overflow: hidden;
      }

      .doppler-gradient {
        position: absolute;
        top: 0;
        left: 0;
        min-width:100%;
        min-height:100%;
        width: 100%;
        height: 100%;
        opacity: 1;
        z-index: -2;
        background: linear-gradient(216.71deg, #4F80FF 6.72%, #7A4BFF 91.2%);
        transition: all .2s ease-in-out;
      }

      .doppler-gradient-hover {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        min-width: 100%;
        min-height: 100%;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: linear-gradient(216.71deg, #2375F3 6.72%, #7C1FF4 91.2%);
        transition: all .2s ease-in-out;
      }

      .doppler-btn:hover .doppler-gradient-hover {
        opacity: 1;
      }

      .import-svg {
        margin-top: 2px;
        height: 13px;
      }
    `}
    </style>
  );
}
