import { Cohort, User } from "../../models";

export interface CohortsListProps {
  cohorts: Cohort[];
  memberId?: string;
  title: string;
  showMembers?: boolean;
  showActions?: boolean;
  removeUserFromCohort?: (cohortId: string, action: "remove") => void;
}

export interface AddToNewCohertProps {
  cohorts: Cohort[];
  onChange: (cohortId: string, action: "add") => void;
  error?: string;
}

export interface UsersDropdownProps {
  users: User[];
  eventHandler: (event: string) => void;
}
