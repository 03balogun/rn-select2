import { useState, type ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';
import RNSelect2, { type RNSelect2Item } from 'rn-select2';
import { groupedCountryList, countryList } from '../../src/data';
import Animated, { LinearTransition } from 'react-native-reanimated';

type DemoSectionProps = {
  title: string;
  description: string;
  value?: string;
  children: ReactNode;
};

const DemoSection = ({
  title,
  description,
  value,
  children,
}: DemoSectionProps) => (
  <Animated.View layout={LinearTransition} style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    {children}
    <Animated.View layout={LinearTransition}>
      <Text style={styles.result}>Selected: {value ? value : 'None'}</Text>
    </Animated.View>
  </Animated.View>
);

const RNSelect2Demo = () => {
  const [singleGrouped, setSingleGrouped] = useState<RNSelect2Item | null>();
  const [multiGrouped, setMultiGrouped] = useState<RNSelect2Item[] | null>();
  const [singleLinear, setSingleLinear] = useState<RNSelect2Item | null>(null);
  const [multiLinear, setMultiLinear] = useState<RNSelect2Item[] | null>(null);

  return (
    <Animated.ScrollView style={styles.container}>
      <Text style={styles.title}>RNSelect2 Demo</Text>

      <DemoSection
        title="Single Selection (Grouped)"
        description="Select a single country from a grouped list of countries by continent."
        value={singleGrouped?.label}
      >
        <RNSelect2
          data={groupedCountryList}
          onSelect={(item) => {
            console.log('Selected:', item);
            setSingleGrouped(item);
          }}
          placeholder="Select a country"
        />
      </DemoSection>

      <DemoSection
        title="Multiple Selection (Grouped)"
        description="Select multiple countries from a grouped list of countries by continent."
        value={multiGrouped?.map((item) => item.label)?.join(', ')}
      >
        <RNSelect2
          data={groupedCountryList}
          onSelect={(items) => setMultiGrouped(items)}
          placeholder="Select countries"
          multiSelect={true}
        />
      </DemoSection>

      <DemoSection
        title="Single Selection (Linear)"
        description="Select a single country from a flat list of all countries."
        value={singleLinear?.label}
      >
        <RNSelect2
          data={countryList}
          onSelect={(item) => setSingleLinear(item)}
          placeholder="Select a country"
        />
      </DemoSection>

      <DemoSection
        title="Multiple Selection (Linear)"
        description="Select multiple countries from a flat list of all countries."
        value={multiLinear?.map((item) => item.label)?.join(', ')}
      >
        <RNSelect2
          data={countryList}
          onSelect={(items) => setMultiLinear(items)}
          placeholder="Select countries"
          multiSelect={true}
        />
      </DemoSection>

      <DemoSection
        title="Styled Selection"
        description="A custom-styled select component showcasing the styling capabilities."
      >
        <RNSelect2
          data={groupedCountryList}
          onSelect={() => {}}
          placeholder="Styled select"
          multiSelect={true}
          styles={{
            container: styles.customContainer,
            topBar: {
              container: styles.customTopBar,
              text: styles.customTopBarText,
              clearButton: {
                color: 'white',
              },
              arrow: {
                color: 'white',
              },
            },
            listItem: {
              container: styles.customListItem,
              text: styles.customListItemText,
              highlightedText: {
                color: 'red',
              },
            },
            listItemHeader: {
              container: styles.customListItemHeader,
              text: styles.customListItemHeaderText,
            },
            tag: {
              container: styles.customTag,
              text: styles.customTagText,
              removeIcon: {
                color: 'white',
              },
            },
          }}
        />
      </DemoSection>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
    color: '#666',
  },
  result: {
    marginTop: 10,
    fontStyle: 'italic',
  },
  customContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  customTopBar: {
    backgroundColor: '#4a90e2',
    padding: 15,
  },
  customTopBarText: {
    color: 'white',
    fontSize: 16,
  },
  customListItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  customListItemText: {
    fontSize: 15,
  },
  customListItemHeader: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  customListItemHeaderText: {
    fontWeight: 'bold',
    color: '#4a90e2',
  },
  customTag: {
    backgroundColor: '#4a90e2',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 2,
  },
  customTagText: {
    color: 'white',
  },
});

export default RNSelect2Demo;
