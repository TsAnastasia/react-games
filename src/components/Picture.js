import React from "react";

const Picture = ({ index = "0", color = "#000", size = "20" }) => {
  const images = [
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.667 28h34.666M6.667 28V14.667C6.666 7.303 12.636 1.333 20 1.333s13.333 5.97 13.333 13.334V28m-18.666 4v1.334a5.333 5.333 0 0010.666 0V32"
        stroke={color}
        strokeWidth="2"
      />
    </svg>,
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36.667 31.667A3.333 3.333 0 0133.333 35H6.668a3.333 3.333 0 01-3.333-3.333V13.333C3.333 11.5 4.833 10 6.667 10h5L15 5h10l3.334 5h5a3.333 3.333 0 013.333 3.333v18.334z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 28.333A6.667 6.667 0 1020 15a6.667 6.667 0 000 13.333z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    <svg width="37" height="41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.021 14.793l-.625-.78-.375.3v.48h1zM18.215 1l.625-.78a1 1 0 00-1.251 0l.626.78zm17.192 13.793h1v-.48l-.374-.3-.626.78zM5.934 23.07v-1h-1v1h1zm9.824 0h1v-1h-1v1zM2.021 41V14.793h-2V41h2zm-.374-25.427L18.84 1.78 17.59.22.396 14.013l1.251 1.56zM17.59 1.78l17.193 13.793 1.251-1.56L18.84.22 17.59 1.78zm16.818 13.013V41h2V14.793h-2zM6.934 41V23.069h-2V41h2zm-1-16.931h9.824v-2H5.934v2zm8.824-1V41h2V23.069h-2zm-2.684 9.276h3.684v-2h-3.684v2zM27.04 21.69v11.034h2V21.69h-2zm4.912-16.552v6.896h2V5.138h-2z"
        fill={color}
      />
      <path
        d="M.714 40.965h17.5v-2H.714v2zm17.5 0h17.5v-2h-17.5v2z"
        fill={color}
      />
    </svg>,
    <svg width="42" height="41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30.735 10.61L8.334 33m24.002-11.195H19.534M37.52 17.39A9.599 9.599 0 0030.727 1a9.609 9.609 0 00-6.792 2.812L13.134 14.608v13.594h13.601L37.52 17.39z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20.334" cy="21" r="19" stroke={color} strokeWidth="2" />
    </svg>,
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M38.333 1l.92.394A1 1 0 0037.938.08l.394.919zM1 17l-.394-.92a1 1 0 00-.12 1.778L1 17zm21.333 21.333l-.857.515a1 1 0 001.777-.12l-.92-.395zM37.94.081l-37.333 16 .788 1.838 37.333-16L37.94.081zM.486 17.858l13.333 8 1.029-1.716-13.334-8-1.028 1.716zm12.99 7.657l8 13.333 1.715-1.03-8-13.332-1.715 1.029zm9.777 13.212l16-37.333-1.839-.788-16 37.333 1.838.788zM37.626.293l-24 24 1.414 1.414 24-24L37.626.293z"
        fill={color}
      />
    </svg>,
    <svg width="41" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.468 1l.472-.881a1 1 0 00-.944 0l.472.881zm-16 8.571l-.472-.881-.528.283v.598h1zm32 0h1v-.598l-.528-.283-.472.881zm-21.334 20v-1h-1v1h1zm10.667 0h1v-1h-1v1zM.468 42h40v-2h-40v2zM19.996.119l-16 8.57.944 1.764 16-8.572L19.996.12zm16.944 8.57l-16-8.57-.944 1.762 16 8.572.944-1.763zm-17.472-.546v7.143h2V8.143h-2zm0 7.143v7.143h2v-7.143h-2zm-5.667 1h6.667v-2H13.8v2zm6.667 0h6.666v-2h-6.666v2zm-17-6.715V41h2V9.571h-2zm32 0V41h2V9.571h-2zM16.134 41V29.571h-2V41h2zm-1-10.429h10.667v-2H15.134v2zm9.667-1V41h2V29.571h-2z"
        fill={color}
      />
    </svg>,
    <svg width="39" height="41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.468 12.414L29.6 17.93V40H9.334V17.931l10.134-5.517zm0 0V0m-19 40h38m-34.2 0V23.448h5.066M34.668 40V23.448H29.6M16.934 40v-8.276h5.067V40M19.468 1.38h7.6v5.517h-7.6m0 19.31c-1.4 0-2.534-1.235-2.534-2.759 0-1.523 1.135-2.758 2.534-2.758 1.399 0 2.533 1.235 2.533 2.758 0 1.524-1.134 2.759-2.533 2.759z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>,
    <svg width="38" height="41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.968 41V18.931m0 1.38v8.275m0-8.276c0-6.094-4.477-11.034-10-11.034h-7.5v8.276c0 6.094 4.477 11.034 10 11.034h7.5m0-8.276h7.5c5.523 0 10-4.94 10-11.034V1h-7.5c-5.523 0-10 4.94-10 11.034v8.276zm0 0l10-11.034m-10 19.31l-10-11.034"
        stroke={color}
        strokeWidth="2"
      />
    </svg>,
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M20 22.653a5.334 5.334 0 005.334-5.33 5.333 5.333 0 00-10.667 0c0 2.942 2.39 5.33 5.333 5.33z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        clipRule="evenodd"
        d="M36 17.323c0 13.325-13.333 21.32-16 21.32-2.666 0-16-7.995-16-21.32 0-8.829 7.166-15.99 16-15.99 8.835 0 16 7.161 16 15.99z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>,
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M38.666 38.667L28 28m-10.667 5.334c-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.836-7.163 16-16 16z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>,
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 20h10.666m6.667-9.333l-6.667 9.32 6.667 9.347m9.333-22.67a5.334 5.334 0 01-10.666 0 5.334 5.334 0 0110.666 0zm0 26.649a5.334 5.334 0 01-10.666 0 5.334 5.334 0 0110.666 0zM12 19.988a5.334 5.334 0 01-10.667 0 5.334 5.334 0 0110.667 0z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>,
    <svg width="41" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.468 6.714v-1a1 1 0 00-.983.817l.983.183zm32 0l.983-.183a1 1 0 00-.983-.817v1zM39.134 21v1a1 1 0 00.983-1.183l-.983.183zM1.801 21l-.983-.183A1 1 0 001.801 22v-1zm8 8.571h-1v1h1v-1zm21.333 0v1h1v-1h-1zM.468 42h40v-2h-40v2zm3-21v20h2V21h-2zm32 0v20h2V21h-2zm-31-13.286h32v-2h-32v2zm31.017-.816l2.666 14.285 1.966-.366L37.452 6.53l-1.966.367zM39.135 20H1.8v2h37.333v-2zm-36.35 1.183L5.45 6.898 3.485 6.53.818 20.817l1.966.366zM8.8 21v8.571h2V21h-2zm1 9.571h21.333v-2H9.801v2zm22.333-1V21h-2v8.571h2zM3.134 2h17.334V0H3.134v2zm17.334 0H37.8V0H20.468v2z"
        fill={color}
      />
    </svg>,
  ];

  return index >= images.length || index < 0 ? (
    <span>image {index} not found</span>
  ) : (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ transform: `scale(${size / 40})` }}>
        {images[index]}
      </div>
    </div>
  );
};

export default Picture;
