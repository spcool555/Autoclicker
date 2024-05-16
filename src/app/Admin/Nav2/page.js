import React from 'react'
import Link from "next/link";

function Nav2() {
  return (
    <div> 

<div class="scrollbar-sidebar">
            <div class="app-sidebar__inner">
              <ul class="vertical-nav-menu">
                <li class="app-sidebar__heading">Dashboards</li>
                <li>
                  <Link href="/Admin" class="mm-active">
                    <i class="metismenu-icon pe-7s-rocket"></i>
                    Home Page
                  </Link>
                </li>
                <li class="app-sidebar__heading">UI Components</li>
                <li>
                  <Link href="">
                    <i class="metismenu-icon pe-7s-diamond"></i>
                Home Section
                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/Admin/HomeSection">
                        <i class="metismenu-icon"></i>
                        Update Specification Image
                      </Link>
                      
                    </li>
                    <li>
                    <Link href="/Admin/HomeSection/SpecificationAndFeature">
                        <i class="metismenu-icon"></i>    Specification & Features
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/HomeSection/Questions">
                        <i class="metismenu-icon"></i> Frequently Asked Questions?
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/HomeSection/FAQs">
                        <i class="metismenu-icon"></i>   Free/Paid FAQs
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/HomeSection/FeaturesMT">
                        <i class="metismenu-icon"></i> FeaturesMT
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/HomeSection/WhatMakes">
                        <i class="metismenu-icon"></i>   WhatMakes MT Auto Clicker Different
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/HomeSection/TopVideo">
                        <i class="metismenu-icon"></i>    TopVideos
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/HomeSection/HeadTagData">
                        <i class="metismenu-icon"></i>HeadTagData
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i class="metismenu-icon pe-7s-car"></i>
                    Download Page 
                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                  </a>
                  <ul>
                    <li>
                      <Link href="/Admin/Download">
                        <i class="metismenu-icon"></i> Minimum System Requirements
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/Download/Procedure">
                        <i class="metismenu-icon"></i> Downloading and Installing Procedure
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/Download/Applications">
                        <i class="metismenu-icon"></i>          Applications of MT Auto Clicker
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/Download/WorkFlow">
                        <i class="metismenu-icon"></i>  Work Flow
                      </Link>
                    </li>
                    </ul>
                    <a href="">
                    <i class="metismenu-icon pe-7s-car"></i>
                  Others
                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                  </a>
                  <ul>
                    <li>
                      <Link href="/Admin/PricingSection">
                        <i class="metismenu-icon"></i>    Pricing Page 
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/AboutSection">
                        <i class="metismenu-icon"></i>   About Page 
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/BlogSection">
                        <i class="metismenu-icon"></i>   Blog Page 
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/Documentation">
                        <i class="metismenu-icon"></i> Documentation Page
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/PrivacyPolicy">
                        <i class="metismenu-icon"></i>   Privacy Policy Page
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/TearmsOfUse">
                        <i class="metismenu-icon"></i> Terms Of Use Page
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/ChangeLogPage">
                        <i class="metismenu-icon"></i>Change log Page
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/FooterSection">
                        <i class="metismenu-icon"></i>Footer Page 
                      </Link>
                    </li>
                  </ul>
                </li>
              
                

              </ul>
            </div>
          </div>

    </div>
  )
}

export default Nav2;