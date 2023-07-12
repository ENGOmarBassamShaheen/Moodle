import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';

const CONTENT = {
  tableHead: ['Courses', 'Teacher', 'Hourse', 'GRADE '],
  tableTitle: [
    'Mobile',
    'WEB',
    'IS',
    'Economy',
    'DS',
    'M-LAB',
    'IS-LAB',
    'DS-LAB',
    'WEB_LAB',
  ],
  tableData: [
    ['Dr.Fatma', '3', '93'],
    ['Dr.Jameel', '3', '95'],
    ['Dr.Naji', '3', '96'],
    ['Dr.Ismail', '3', '98'],
    ['Dr.Mohammed', '3', '91'],
    ['ENG.NOOR', '1', '91'],
    ['ENG.Sanaa', '0', '91'],
    ['ENG.Ghada', '1', '91'],
    ['ENG.Sanaa', '1', '91'],
  ],
};
const image = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qz9VaC-3BkCx2u7GhtGQZPyWADL3QWhC1DwM9IED315_M7m1i7JGFWIatI8KJKe8M6o&usqp=CAU',
};
function Grade() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Image
          style={styles.images}
          source={require('../../assets/exam.png')}
        />
        <Text style={styles.gradeTXT}>GRADE</Text>
        <Table borderStyle={{borderWidth: 1}} style={styles.Table}>
          <Row
            data={CONTENT.tableHead}
            flexArr={[1, 2, 1, 1]} //دمج
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={CONTENT.tableTitle}
              style={styles.title}
              heightArr={[29, 29]}
              textStyle={styles.text}
            />
            <Rows
              data={CONTENT.tableData}
              flexArr={[2, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
        <TouchableOpacity style={styles.Print}>
          <Text style={styles.txtprint}>PRINT</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
export default Grade;
const styles = StyleSheet.create({
  container: {flex: 1},
  head: {height: 50, backgroundColor: '#00DAB9'},
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, backgroundColor: '#5ED6FF'},
  row: {height: 28},
  text: {textAlign: 'center', fontWeight: 'bold', fontSize: 16},
  Table: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 48,
    width: '92%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 40,
  },
  images: {
    width: 120,
    height: 120,
    borderRadius: 50,
    marginLeft: 130,
    borderWidth: 5,
  },
  gradeTXT: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  Print: {
    width: '50%',
    backgroundColor: '#FF2571',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 100,
  },
  txtprint: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
