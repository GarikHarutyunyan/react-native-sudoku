import {ReactElement, ReactNode} from 'react';
import {FlatList, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface IGridProps {
  items: unknown[];
  itemStyle: StyleProp<ViewStyle>;
  renderItem: ({item, index}: {item: any; index: number}) => ReactElement;
  numColumns: number;
}

export const Grid = (props: IGridProps) => {
  const {items, renderItem, itemStyle, numColumns} = props;
  const formatItems = (dataList: unknown[], numColumns: number) => {
    const totalRows = Math.floor(dataList.length / numColumns);
    let totalLastRow = dataList.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push({key: 'blank', empty: true});
      totalLastRow++;
    }

    return dataList;
  };
  const formatedItems = formatItems(items, numColumns);

  const renderFormatedItem = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }): ReactElement => {
    if (item?.empty) {
      return <View style={[itemStyle, styles.itemInvisible]} />;
    }

    return renderItem({item, index});
  };

  return (
    <View>
      <FlatList
        data={formatedItems}
        renderItem={renderFormatedItem}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
});
