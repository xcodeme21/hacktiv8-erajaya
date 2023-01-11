import "./index.css";
import MemberSection from "./templates/MemberSection";
import PastSection from "./templates/PastSection";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [seeAllOrganizer, setSeeAllOrganizer] = useState(false);
  const organizers = [
    {
      name: "Adhy Wiranata",
      title: "Organizers",
    },
    {
      name: "Audy Pratama",
      title: "Tutors",
    },
    {
      name: "Agus Siswanto",
      title: "Student",
    },
    {
      name: "Andika Yopi",
      title: "Student",
    },
    {
      name: "Riza Aji Setiawan",
      title: "Student",
    },
    {
      name: "Dea",
      title: "Student",
    },
    {
      name: "Leonardo Kurniawan",
      title: "Student",
    },
  ];

  const pasts = [
    {
      date: "27 November 2017",
      desc: "#39 JakartaJS April Meetup with kumparan",
      visit: 139,
    },
    {
      date: "27 October 2017",
      desc: "#39 JakartaJS April Meetup with BliBli",
      visit: 113,
    },
    {
      date: "27 September 2017",
      desc: "#39 JakartaJS April Meetup with Hacktiv8",
      visit: 110,
    },
  ];

  return (
    <>
      <nav class="navbar">
        <div class="logo">QTemu</div>
        <ul class="nav-links">
          <div class="menu">
            <li>
              <a href="/">Create Meetup</a>
            </li>
            <li>
              <a href="/">Explore</a>
            </li>
          </div>
        </ul>
        <ul class="nav-links-login">
          <div class="menu-login">
            <li>
              <a href="/">Login</a>
            </li>
          </div>
        </ul>
      </nav>

      <div class="row bg-gray m-10">
        <div class="row m-20">
          <div class="column side" align="center">
            <img src="/me.png" width={200} />
          </div>

          <div class="column middle">
            <h2>Hacktiv8 Meetup</h2>
            <br />
            <table>
              <tbody>
                <tr>
                  <td>Location</td>
                  <td>&emsp;</td>
                  <td>Jakarta, Indonesia</td>
                </tr>
                <tr>
                  <td>Members</td>
                  <td></td>
                  <td>1,078</td>
                </tr>
                <tr>
                  <td>Organizers</td>
                  <td></td>
                  <td>Agus Siswanto</td>
                </tr>
              </tbody>
            </table>
            <br />
            <button class="btn-join-us">Join Us</button>
          </div>
        </div>
      </div>

      <div class="row m-10">
        <h2>Next Meetup</h2>
        <div class="row-fluid bg-gray">
          <div class="m-10">
            <p class="p-5">
              <br />
              <b>Awesome meetup and event</b>
              <br />
              <span class="date-next-meetup">25 January 2019</span>
              <br />
              <br />
              Hello, Javascript and Node.js Ninjas!
              <br />
              Get ready to out monthly meetup JakartaJS! This will be fifth
              meetup of 2018!
              <br />
              The meet format will contain some short stories and technical
              tasks.
              <br />
              If you have a short announcement you'd like share with audience,
              you may do so during open mic announcements.
              <br />
              <br />
              Remember to bring a photo ID to get through bulding security.
              <br />
              <br />
              .....
              <br />
              <br />
              See you there!
              <br />
              <br />
              Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS
              Organizers
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      <div class="row m-10">
        <h2>About Meetup</h2>
        <div class="row-fluid">
          <p class="p-5">
            Come and meet other developers interested inthe Javascript and it's
            library in the Greater Jakarta area.
            <br />
            <br />
            Twitter: @JakartaJS and we use hashtag #jakartajs
          </p>
        </div>
      </div>

      <div class="row m-10">
        <div class="main-header">
          <div>
            <h2>Members</h2>
          </div>
          <div>
            <a
              onClick={(e) => {
                e.preventDefault();
                setSeeAllOrganizer(!seeAllOrganizer);
              }}
            >
              See All
            </a>
          </div>
        </div>
        <div class="row-fluid bg-gray">
          <MemberSection showMore={seeAllOrganizer} organizers={organizers} />
        </div>
      </div>

      <div class="row m-10">
        <div class="main-header">
          <div>
            <h2>Past Meetups</h2>
          </div>
          <div>
            <p>See All</p>
          </div>
        </div>
        <div class="row-fluid">
          <PastSection pasts={pasts} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
