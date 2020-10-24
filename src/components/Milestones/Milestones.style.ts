import styled from 'styled-components/macro';

const MilestonesWrapper = styled.div`
    .title {
        margin: 0;
        margin-top: 32px;
        font-weight: bold;
    }
    .MuiInputBase-formControl {
        border: 1px solid black;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
    .MuiTabs-root {
    .MuiTabs-indicator {
      background: linear-gradient(90deg, rgba(16,69,116,1) 0%, rgba(0,145,255,1) 100%);
    }
    .MuiTab-textColorInherit {
      color: #2C8BFF;
    }
    .Mui-selected {
      color: rgba(16,69,116,1);
    }
  }
`;

export { MilestonesWrapper };