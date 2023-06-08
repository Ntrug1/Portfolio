import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";

const Projects = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground></TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <span className="text-9xl">Hello {progress}</span>
        )}
      ></Tile>
    </TileContent>
    <TileContent>haha</TileContent>
    <TileContent>haha</TileContent>
  </TileWrapper>
);

export default Projects;
