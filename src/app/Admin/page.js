"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import Nav2 from "../Admin/Nav2/page";

const Profile = () => {
  const router = useRouter();
  useEffect(() => {
    // Get the uid value from local storage
    const uid = localStorage.getItem("uid");
    console.log("UID value:", uid); // Log the value of uid

    if (!uid) {
      // If uid is undefined or null, redirect to the home page
      router.push("/");
    } else if (uid !== "1") {
      // If the user is not an admin, redirect to the home page
      router.push("/");
    }
  }, []);

  return (
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
    <Nav2 />
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="app-main__outer">
              <div className="app-main__inner">
                <div className="row">
                  <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-midnight-bloom">
                      <div className="widget-content-wrapper text-white">
                        <div className="widget-content-left">
                          <div className="widget-heading">Total Orders</div>
                          <div className="widget-subheading">Last year expenses</div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-white">
                            <span>1896</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-arielle-smile">
                      <div className="widget-content-wrapper text-white">
                        <div className="widget-content-left">
                          <div className="widget-heading">Clients</div>
                          <div className="widget-subheading">Total Clients Profit</div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-white">
                            <span>$ 568</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-grow-early">
                      <div className="widget-content-wrapper text-white">
                        <div className="widget-content-left">
                          <div className="widget-heading">Followers</div>
                          <div className="widget-subheading">People Interested</div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-white">
                            <span>46%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-premium-dark">
                      <div className="widget-content-wrapper text-white">
                        <div className="widget-content-left">
                          <div className="widget-heading">Products Sold</div>
                          <div className="widget-subheading">Revenue streams</div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-warning">
                            <span>$14M</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="row">
                  <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div className="widget-heading">Total Orders</div>
                            <div className="widget-subheading">Last year expenses</div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-success">1896</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div className="widget-heading">Products Sold</div>
                            <div className="widget-subheading">Revenue streams</div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-warning">$3M</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div className="widget-heading">Followers</div>
                            <div className="widget-subheading">People Interested</div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-danger">45,9%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div className="widget-heading">Income</div>
                            <div className="widget-subheading">Expected totals</div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-focus">$147</div>
                          </div>
                        </div>
                        <div className="widget-progress-wrapper">
                          <div className="progress-bar-sm progress-bar-animated-alt progress">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              aria-valuenow="54"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "54%" }}
                            ></div>
                          </div>
                          <div className="progress-sub-label">
                            <div className="sub-label-left">Expenses</div>
                            <div className="sub-label-right">100%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-card mb-3 card">
                      <div className="card-header">
                        Active Users
                        <div className="btn-actions-pane-right">
                          <div role="group" className="btn-group-sm btn-group">
                            <button className="active btn btn-focus">Last Week</button>
                            <button className="btn btn-focus">All Month</button>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                          <thead>
                            <tr>
                              <th className="text-center">#</th>
                              <th>Name</th>
                              <th className="text-center">City</th>
                              <th className="text-center">Status</th>
                              <th className="text-center">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center text-muted">#345</td>
                              <td>
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <div className="widget-content-left">
                                        <img
                                          width="40"
                                          className="rounded-circle"
                                          src="assets/images/avatars/4.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="widget-content-left flex2">
                                      <div className="widget-heading">John Doe</div>
                                      <div className="widget-subheading opacity-7">
                                        Web Developer
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">Madrid</td>
                              <td className="text-center">
                                <div className="badge badge-warning">Pending</div>
                              </td>
                              <td className="text-center">
                                <button
                                  type="button"
                                  id="PopoverCustomT-1"
                                  className="btn btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center text-muted">#347</td>
                              <td>
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <div className="widget-content-left">
                                        <img
                                          width="40"
                                          className="rounded-circle"
                                          src="assets/images/avatars/3.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="widget-content-left flex2">
                                      <div className="widget-heading">
                                        Ruben Tillman
                                      </div>
                                      <div className="widget-subheading opacity-7">
                                        Etiam sit amet orci eget
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">Berlin</td>
                              <td className="text-center">
                                <div className="badge badge-success">Completed</div>
                              </td>
                              <td className="text-center">
                                <button
                                  type="button"
                                  id="PopoverCustomT-2"
                                  className="btn btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center text-muted">#321</td>
                              <td>
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <div className="widget-content-left">
                                        <img
                                          width="40"
                                          className="rounded-circle"
                                          src="assets/images/avatars/2.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="widget-content-left flex2">
                                      <div className="widget-heading">Elliot Huber</div>
                                      <div className="widget-subheading opacity-7">
                                        Lorem ipsum dolor sic
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">London</td>
                              <td className="text-center">
                                <div className="badge badge-danger">In Progress</div>
                              </td>
                              <td className="text-center">
                                <button
                                  type="button"
                                  id="PopoverCustomT-3"
                                  className="btn btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center text-muted">#55</td>
                              <td>
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <div className="widget-content-left">
                                        <img
                                          width="40"
                                          className="rounded-circle"
                                          src="assets/images/avatars/1.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="widget-content-left flex2">
                                      <div className="widget-heading">
                                        Vinnie Wagstaff
                                      </div>
                                      <div className="widget-subheading opacity-7">
                                        UI Designer
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">Amsterdam</td>
                              <td className="text-center">
                                <div className="badge badge-info">On Hold</div>
                              </td>
                              <td className="text-center">
                                <button
                                  type="button"
                                  id="PopoverCustomT-4"
                                  className="btn btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="d-block text-center card-footer">
                        <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
                          <i className="pe-7s-trash btn-icon-wrapper"> </i>
                        </button>
                        <button className="btn-wide btn btn-success">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </main>
    </div>
  );
};

export default Profile;
