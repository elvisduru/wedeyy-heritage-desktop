import React from "react";
import styles from "./Drawer.module.css";
import { NavLink } from "react-router-dom";
import Logo from '../Logo/Logo';
import MediaQuery from 'react-responsive';

const Drawer = props => {
  return (
    <div className={styles.Drawer}>
      <MediaQuery minWidth={768}>
        <Logo />
      </MediaQuery>
      <NavLink to="/" exact>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30.023"
          height="22.735"
          viewBox="0 0 30.023 22.735"
        >
          <g id="layers" transform="translate(0.544 0.504)">
            <path
              id="Path_3902"
              data-name="Path 3902"
              d="M14.487,23.981a.727.727,0,0,1-.281-.056L.443,18.129a.725.725,0,0,1,0-1.336L14.206,11a.727.727,0,0,1,.562,0l13.763,5.795a.725.725,0,0,1,0,1.336L14.768,23.924A.727.727,0,0,1,14.487,23.981ZM2.59,17.462l11.9,5.008,11.9-5.008-11.9,4.468Z"
              transform="translate(0 -10.942)"
              stroke="#646464"
              strokeWidth="1"
            />
            <path
              id="Path_3903"
              data-name="Path 3903"
              d="M14.487,43.718a.727.727,0,0,1-.281-.057L.443,37.866a.725.725,0,1,1,.562-1.336l13.482,5.676L27.969,36.53a.725.725,0,1,1,.562,1.336L14.768,43.661A.727.727,0,0,1,14.487,43.718Z"
              transform="translate(0.001 -26.333)"
              stroke="#646464"
              strokeWidth="1"
            />
            <path
              id="Path_3904"
              data-name="Path 3904"
              d="M14.487,54.66a.727.727,0,0,1-.281-.056L.443,48.809a.725.725,0,1,1,.562-1.336l13.482,5.676,13.482-5.676a.725.725,0,1,1,.562,1.336L14.768,54.6A.727.727,0,0,1,14.487,54.66Z"
              transform="translate(0.001 -32.929)"
              stroke="#646464"
              strokeWidth="1"
            />
          </g>
        </svg>

        <h6 className={styles.active}>Feeds</h6>
      </NavLink>
      <NavLink to="/explore/top">
        <svg
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 52.966 52.966"
        >
          <path
            d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
	c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
	C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
	S32.459,40,21.983,40z"
          />
        </svg>

        <h6>Explore</h6>
      </NavLink>
      <NavLink to="/connect">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 511.626 511.627"
        >
          <g>
            <path
              d="M477.364,127.481c-22.839-28.072-53.864-50.248-93.072-66.522c-39.208-16.274-82.036-24.41-128.479-24.41
		c-46.442,0-89.269,8.136-128.478,24.41c-39.209,16.274-70.233,38.446-93.074,66.522C11.419,155.555,0,186.15,0,219.269
		c0,28.549,8.61,55.299,25.837,80.232c17.227,24.934,40.778,45.874,70.664,62.813c-2.096,7.611-4.57,14.842-7.426,21.7
		c-2.855,6.851-5.424,12.467-7.708,16.847c-2.286,4.374-5.376,9.23-9.281,14.555c-3.899,5.332-6.849,9.093-8.848,11.283
		c-1.997,2.19-5.28,5.801-9.851,10.848c-4.565,5.041-7.517,8.33-8.848,9.853c-0.193,0.097-0.953,0.948-2.285,2.574
		c-1.331,1.615-1.999,2.419-1.999,2.419l-1.713,2.57c-0.953,1.42-1.381,2.327-1.287,2.703c0.096,0.384-0.094,1.335-0.57,2.854
		c-0.477,1.526-0.428,2.669,0.142,3.429v0.287c0.762,3.234,2.283,5.853,4.567,7.851c2.284,1.992,4.858,2.991,7.71,2.991h1.429
		c12.375-1.526,23.223-3.613,32.548-6.279c49.87-12.751,93.649-35.782,131.334-69.094c14.274,1.523,28.074,2.283,41.396,2.283
		c46.442,0,89.271-8.135,128.479-24.414c39.208-16.276,70.233-38.444,93.072-66.517c22.843-28.072,34.263-58.67,34.263-91.789
		C511.626,186.154,500.207,155.555,477.364,127.481z M445.244,292.075c-19.896,22.456-46.733,40.303-80.517,53.529
		c-33.784,13.223-70.093,19.842-108.921,19.842c-11.609,0-23.98-0.76-37.113-2.286l-16.274-1.708l-12.277,10.852
		c-23.408,20.558-49.582,36.829-78.513,48.821c8.754-15.414,15.416-31.785,19.986-49.102l7.708-27.412l-24.838-14.27
		c-24.744-14.093-43.918-30.793-57.53-50.114c-13.61-19.315-20.412-39.638-20.412-60.954c0-26.077,9.945-50.343,29.834-72.803
		c19.895-22.458,46.729-40.303,80.515-53.531c33.786-13.229,70.089-19.849,108.92-19.849c38.828,0,75.13,6.617,108.914,19.845
		c33.783,13.229,60.62,31.073,80.517,53.531c19.89,22.46,29.834,46.727,29.834,72.802S465.133,269.615,445.244,292.075z"
            />
          </g>
        </svg>

        <h6>Connect</h6>
      </NavLink>
      <NavLink to="/notifications">
        <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512">
          <g>
            <g>
              <path
                d="M467.819,431.851l-36.651-61.056c-16.896-28.181-25.835-60.437-25.835-93.312V224
			c0-82.325-67.008-149.333-149.333-149.333S106.667,141.675,106.667,224v53.483c0,32.875-8.939,65.131-25.835,93.312
			l-36.651,61.056c-1.984,3.285-2.027,7.403-0.149,10.731c1.899,3.349,5.461,5.419,9.301,5.419h405.333
			c3.84,0,7.403-2.069,9.301-5.419C469.845,439.253,469.803,435.136,467.819,431.851z M72.171,426.667l26.944-44.907
			C118.016,350.272,128,314.219,128,277.483V224c0-70.592,57.408-128,128-128s128,57.408,128,128v53.483
			c0,36.736,9.984,72.789,28.864,104.277l26.965,44.907H72.171z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M256,0c-23.531,0-42.667,19.136-42.667,42.667v42.667C213.333,91.221,218.112,96,224,96s10.667-4.779,10.667-10.667
			V42.667c0-11.776,9.557-21.333,21.333-21.333s21.333,9.557,21.333,21.333v42.667C277.333,91.221,282.112,96,288,96
			s10.667-4.779,10.667-10.667V42.667C298.667,19.136,279.531,0,256,0z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M302.165,431.936c-3.008-5.077-9.515-6.741-14.613-3.819c-5.099,2.987-6.805,9.536-3.819,14.613
			c2.773,4.715,4.288,10.368,4.288,15.936c0,17.643-14.357,32-32,32c-17.643,0-32-14.357-32-32c0-5.568,1.515-11.221,4.288-15.936
			c2.965-5.099,1.259-11.627-3.819-14.613c-5.141-2.923-11.627-1.259-14.613,3.819c-4.715,8.064-7.211,17.301-7.211,26.731
			C202.667,488.085,226.581,512,256,512s53.333-23.915,53.376-53.333C309.376,449.237,306.88,440,302.165,431.936z"
              />
            </g>
          </g>
        </svg>

        <h6>Notify</h6>
      </NavLink>
      <NavLink to="/profile/about">
        <svg
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 563.43 563.43"
        >
          <path
            d="M280.79,314.559c83.266,0,150.803-67.538,150.803-150.803S364.055,13.415,280.79,13.415S129.987,80.953,129.987,163.756
	S197.524,314.559,280.79,314.559z M280.79,52.735c61.061,0,111.021,49.959,111.021,111.021S341.851,274.776,280.79,274.776
	s-111.021-49.959-111.021-111.021S219.728,52.735,280.79,52.735z"
          />
          <path
            d="M19.891,550.015h523.648c11.102,0,19.891-8.789,19.891-19.891c0-104.082-84.653-189.198-189.198-189.198H189.198
	C85.116,340.926,0,425.579,0,530.124C0,541.226,8.789,550.015,19.891,550.015z M189.198,380.708h185.034
	c75.864,0,138.313,56.436,148.028,129.524H41.17C50.884,437.607,113.334,380.708,189.198,380.708z"
          />
        </svg>

        <h6>Profile</h6>
      </NavLink>
      <NavLink to="/broadcast">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 64">
          <title>broadcast</title>
          <g>
            <g>
            <path d="M27,11a1,1,0,0,0,1.4,1.4,3.74,3.74,0,0,1,5.2,0A1,1,0,0,0,35,11,5.67,5.67,0,0,0,27,11Z" />
            <path d="M38.5,9a1,1,0,0,0,0-1.4,10.56,10.56,0,0,0-14.9,0A1,1,0,1,0,25,9,8.63,8.63,0,0,1,37.1,9,1,1,0,0,0,38.5,9Z" />
            <path d="M21.9,5.8a13,13,0,0,1,18.4,0,1,1,0,1,0,1.4-1.4A15.16,15.16,0,0,0,31.1,0,15,15,0,0,0,20.5,4.4a1,1,0,1,0,1.4,1.4Z" />
            <polygon points="22.2 39.5 22.2 45.5 26 42.5 22.2 39.5" />
            <path d="M54.3,21H36.1a3.81,3.81,0,0,0-.5-1.5l8.2-8a3.08,3.08,0,0,0,4.5-2.8,3.12,3.12,0,0,0-3.1-3.1A3.06,3.06,0,0,0,42.5,10l-8.1,7.9a4.45,4.45,0,0,0-2.9-1,4.68,4.68,0,0,0-2.8.9L17.2,6.1a3.17,3.17,0,0,0-2.5-5,3.11,3.11,0,1,0,.9,6.1L27.4,19.3a4.92,4.92,0,0,0-.6,1.7H5.8A5.78,5.78,0,0,0,0,26.7V58.3A5.76,5.76,0,0,0,5.7,64H54.3A5.7,5.7,0,0,0,60,58.3V26.7A5.76,5.76,0,0,0,54.3,21Zm-6,28.1a.91.91,0,0,1-.4.8,1,1,0,0,1-.9.2l-9.9-2.7v4.7a.94.94,0,0,1-1,1H12.6a.94.94,0,0,1-1-1V32.9a.94.94,0,0,1,1-1H36.2a.94.94,0,0,1,1,1v4.7l9.9-2.7a1,1,0,0,1,.9.2,1.23,1.23,0,0,1,.4.8V49.1Z" />
            <path d="M13.6,51.1H35.2V34H13.6Zm6.6-13.6a1,1,0,0,1,.6-.9,1.1,1.1,0,0,1,1.1.1l6.5,5a1.23,1.23,0,0,1,.4.8.91.91,0,0,1-.4.8l-6.5,5a1.07,1.07,0,0,1-1.1.1,1.15,1.15,0,0,1-.6-.9Z" />
            <polygon points="37.2 45.3 46.3 47.8 46.3 37.2 37.2 39.7 37.2 45.3" />
            </g>
          </g>
        </svg>

        <h6>Broadcast</h6>
      </NavLink>
    </div>
  );
};

export default Drawer;
