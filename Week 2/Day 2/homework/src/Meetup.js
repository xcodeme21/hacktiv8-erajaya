import "./App.css";

function Meetup() {
  return (
    <div class="row bg-gray m-10">
      <div class="row m-20">
        <div class="column side" align="center">
          <div class="square"></div>
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
  );
}

export default Meetup;
