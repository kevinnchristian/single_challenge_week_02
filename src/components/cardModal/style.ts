import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  modalBackgroud: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02051bd3',
  },
  modalImage: {
    alignSelf: 'center',
    height: 180,
    width: 180,
    borderColor: '#B65CF2',
    borderWidth: 6,
    borderRadius: 100,
    elevation: 5,
    marginBottom: 10
  },
  modalTextDetails: {
    color: '#B65CF2',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    elevation: 5
  },
  modalTextDetailsInternal: {
    color: '#F2D64B',
  },
  modalCloseButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    backgroundColor: '#05F2AF',
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 5,
    paddingHorizontal: 20,
    paddingVertical: 6
  },
  modalCloseButtonText: {
    color: '#02051b',
    fontSize: 15,
    fontWeight: '500'
  },
});

export default styles;