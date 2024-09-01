import UseStates from "./UseStates";

const HomeUseStates = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row">

          <div className="col-md-4">
            <UseStates 
              id={1}
              title="oppo"
              category="mobile"
              ram="8gb"
              rom="128gb"
            />
          </div>

          <div className="col-md-4">
            <UseStates 
              id={2}
              title="VivoBook"
              category="Laptop"
              ram="8gb"
              rom="512gb"
            />
          </div>

          <div className="col-md-4">
            <UseStates 
              id={3}
              title="OppoTab"
              category="Tablet"
              ram="6gb"
              rom="128gb"
            />
          </div>

          <div className="col-md-4">
            <UseStates 
              id={4}
              title="SamsungTab"
              category="Tablet"
              ram="6gb"
              rom="128gb"
            />
          </div>

          <div className="col-md-4">
            <UseStates 
              id={5}
              title="i phone 15 pro"
              category="Mobile"
              ram="8gb"
              rom="256gb"
            />
          </div>

          <div className="col-md-4">
            <UseStates 
              id={6}
              title="Hp 15s"
              category="Laptop"
              ram="8gb"
              rom="512gb"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default HomeUseStates;
