import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-14">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas  icon={technology.icon} />
          <h4 className="text-secondary text-center">{technology.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
