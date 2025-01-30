import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="app-header navbar d-flex align-items-center position-fixed p-0">
      <button className="border-0 bg-transparent tglbtn">
        <img src="content/images/toggler.svg" alt="toggler" />
      </button>
      <ul className="list-unstyled d-flex align-items-center justify-content-end mb-0">
        <li>
          <button className="border-0 bg-transparent p-10 d-flex align-items-center justify-content-center ps-0">
            {/* <span className="material-symbols-outlined">help</span> */}
            <img src="content/images/help.svg" alt="help" />
          </button>
        </li>
        <li className="position-relative">
          {/* Apply dot class for applying blue dot on notification icon */}
          <button
            className="border-0 bg-transparent p-10 d-flex align-items-center justify-content-center position-relative"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* <span className="material-symbols-outlined">notifications</span> */}
            <img
              src="content/images/notifications_unread.svg"
              alt="notifications_unread"
            />
          </button>
          <div className="dropdown-menu p-2 notification">
            <div className="d-flex justify-content-between p-3 mb-2">
              <h6 className="mb-0">Notification</h6>
              <span role="button" className="m-0">
                Mark all as read
              </span>
            </div>
            <ul className="list-unstyled overflow-y-auto customscrlbar">
              <li>
                <Link
                  className="dropdown-item d-flex pt-0 lftnoti notidot position-relative align-items-center"
                  href="#"
                >
                  <img src="/images/Dashboard.svg" alt="" className="mt-2" />
                  <div>
                    <span className="m-0">Felecia Rower</span>
                    <p className="mb-0">Cake pie jelly jelly beans. </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex pt-0 lftnoti align-items-center"
                  href="#"
                >
                  <img src="/images/Dashboard.svg" alt="" className="mt-2" />
                  <div>
                    <span className="m-0">Felecia Rower</span>
                    <p className="mb-0">Cake pie jelly jelly beans. </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex pt-0 lftnoti align-items-center"
                  href="#"
                >
                  <img src="/images/Dashboard.svg" alt="" className="mt-2" />
                  <div>
                    <span className="m-0">Felecia Rower</span>
                    <p className="mb-0">Cake pie jelly jelly beans. </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex pt-0 lftnoti align-items-center"
                  href="#"
                >
                  <img src="/images/Dashboard.svg" alt="" className="mt-2" />
                  <div>
                    <span className="m-0">Felecia Rower</span>
                    <p className="mb-0">Cake pie jelly jelly beans. </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex pt-0 lftnoti align-items-center"
                  href="#"
                >
                  <img src="/images/Dashboard.svg" alt="" className="mt-2" />
                  <div>
                    <span className="m-0">Felecia Rower</span>
                    <p className="mb-0">Cake pie jelly jelly beans. </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="position-relative">
          <button
            className="border-0 bg-transparent p-10 d-flex align-items-center justify-content-center pe-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="content/images/user.png"
              alt="user"
              width="32"
              height="32"
            />
          </button>
          <div className="dropdown-menu p-2">
            <div className="d-flex grndot position-relative">
              <img
                src="content/images/user.png"
                alt="user"
                width="32"
                height="32"
              />
              <div>
                <h6 className="mb-0 fw-bold">Ritesh Kumar Singh</h6>
                <p className="m-0 fw-normal">ritesh.kumarsingh@gmail.com</p>
              </div>
            </div>
            <ul className="list-unstyled">
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center px-3 pt-0"
                  href="#"
                >
                  <span className="material-symbols-outlined">person</span>
                  <p className="mb-0">View Profile</p>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center px-3"
                  href="#"
                >
                  <span className="material-symbols-outlined">settings</span>
                  <p className="mb-0">Account Settings</p>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center px-3"
                  href="#"
                >
                  <span className="material-symbols-outlined">logout</span>
                  <p className="mb-0">Sign out</p>
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
