/* eslint-disable jsx-a11y/alt-text */
import "./App.css";

function Members() {
  return (
    <div class="row m-10">
      <div class="main-header">
        <div>
          <h2>Members</h2>
        </div>
        <div>
          <p>See All</p>
        </div>
      </div>
      <div class="row-fluid bg-gray">
        <div class="m-10 p-20">
          <table>
            <tr>
              <td>
                <img src="/me.png" width={80} />
              </td>
              <td>&emsp;</td>
              <td>
                <h2>Organizers</h2>
                <p class="pt-5">Agus Siswanto &emsp;4 others</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Members;
