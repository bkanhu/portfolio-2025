type OrganisationCardProps = {
  OrganisationName: string;
  RoleInOrganisation?: string;
  EmploymentType?: string;
  OrganisationAddress: string;
  YearInOrganisation?: string;
  ShortDesc?: string;
};

const OrganisationCard = ({
  OrganisationName,
  RoleInOrganisation,
  EmploymentType,
  OrganisationAddress,
  YearInOrganisation,
  ShortDesc,
}: OrganisationCardProps) => {
  return (
    <div className="container mb-4">
      <div className="flex gap-5">
        <div>
          <h5 className="text-2xl text-woodsmoke-100">{OrganisationName}</h5>
          <p className="my-2 text-base text-woodsmoke-200">
            {ShortDesc ? (
              <span>{ShortDesc}</span>
            ) : (
              <span>
                {RoleInOrganisation}, {EmploymentType}
              </span>
            )}
          </p>
          <p className="my-2 text-base text-woodsmoke-300">
            {OrganisationAddress}, {YearInOrganisation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganisationCard;
