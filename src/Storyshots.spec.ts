import * as initStoryshots from "@storybook/addon-storyshots";
import * as TestRenderer from "react-test-renderer";
import "jest-styled-components";

initStoryshots.default({
  framework: "react",
  test: initStoryshots.multiSnapshotWithOptions({
    createNodeMock: TestRenderer.create
  })
});
