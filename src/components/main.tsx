import AddToNewCohert from "./../components/addToNewCohert";
import CohortsList from "./../components/cohortsList";
import UsersDropdown from "./../components/usersDropdown";
import { exampleUsers } from "./../store";
import useCohortOperations from "../sharedHooks/useCohortOperations";
function Main() {
  const [
    cohorts,
    interceptCohortMembers,
    activeUserCohorts,
    activeUser,
    setActiveUser,
    error,
  ] = useCohortOperations();

  return (
    <div>
      <div className="container text-center">
        <CohortsList cohorts={cohorts} title="All Cohorts" showMembers={true} />
        <UsersDropdown users={exampleUsers} eventHandler={setActiveUser} />
        {activeUser && (
          <>
            <CohortsList
              cohorts={activeUserCohorts(true)}
              removeUserFromCohort={interceptCohortMembers}
              title="Active User Cohorts"
              showActions={true}
            />

            <AddToNewCohert
              cohorts={activeUserCohorts(false)}
              onChange={interceptCohortMembers}
              error={error}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Main;
