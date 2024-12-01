import { ReactNode, useState } from 'react';

type Tab = {
  name: string;
  component: ReactNode;
};

export function TabDisplay({ tabs }: { tabs: Tab[] }) {
  const [tab, setTab] = useState(0);
  const tabButtons = tabs.map((tabInfo, i) => (
    <button
      key={i}
      disabled={i === tab}
      onClick={() => {
        setTab(i);
      }}
    >
      {tabInfo.name}
    </button>
  ));
  return (
    <>
      <section>{tabButtons}</section>
      <section>
        {tabs.length > 0 ? (
          tabs[tab].component
        ) : (
          <p>
            <i>Empty tabs</i>
          </p>
        )}
      </section>
    </>
  );
}
