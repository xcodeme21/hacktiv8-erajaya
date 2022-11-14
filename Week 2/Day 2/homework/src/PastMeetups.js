import "./App.css";

function PastMeetups() {
  return (
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
        <div class="grid-container">
          <div class="item">
            <div className="p-20">
              <p>
                <strong>27 November 2017</strong>
              </p>
              <br />
              <hr />
              <br />
              <p>
                <strong>#39 JakartaJS April Meetup with kumparan</strong>
              </p>
              <br />
              <p>
                <strong>139</strong> <span className="went">went</span>
              </p>
              <br />
              <button class="btn-view">View</button>
            </div>
          </div>
          <div class="item">
            <div className="p-20">
              <p>
                <strong>27 October 2017</strong>
              </p>
              <br />
              <hr />
              <br />
              <p>
                <strong>#38 JakartaJS April Meetup with BliBli</strong>
              </p>
              <br />
              <p>
                <strong>113</strong> <span className="went">went</span>
              </p>
              <br />
              <button class="btn-view">View</button>
            </div>
          </div>
          <div class="item">
            <div className="p-20">
              <p>
                <strong>27 September 2017</strong>
              </p>
              <br />
              <hr />
              <br />
              <p>
                <strong>#37 JakartaJS April Meetup with Hacktiv8</strong>
              </p>
              <br />
              <p>
                <strong>110</strong> <span className="went">went</span>
              </p>
              <br />
              <button class="btn-view">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastMeetups;
