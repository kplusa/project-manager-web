import Chart from "../../components/Chart/Chart";
import { ProjectTypesChartData } from "../../mocks/projectTypesChartData";
function ProjectTypesChart() {
  return (
    <>
      <Chart data={ProjectTypesChartData} />
    </>
  );
}

export default ProjectTypesChart;
