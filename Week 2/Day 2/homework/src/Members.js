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
                <span class="circle"></span>
              </td>
              <td>&emsp;</td>
              <td>
                <h2>Organizers</h2>
                <p class="pt-5">Adhy Wiranata &emsp;4 others</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Members;
