import PropTypes from 'prop-types';
import { Marker } from 'react-leaflet';
import { Marker as LeafletMarker } from 'leaflet-rotatedmarker';

export default class RotatedMarker extends Marker {
  static propTypes = {
    rotationAngle: PropTypes.number.isRequired,
    rotationOrigin: PropTypes.string,
  };

  static defaultProps = {
    rotationOrigin: 'center',
  };

  createLeafletElement(props) {
    return super.createLeafletElement(props);
  }

  updateLeafletElement(fromProps, toProps) {
    super.updateLeafletElement(fromProps, toProps);

    if (toProps.rotationAngle !== fromProps.rotationAngle) {
      this.leafletElement.setRotationAngle(toProps.rotationAngle);
    }

    if (toProps.rotationOrigin !== fromProps.rotationOrigin) {
      this.leafletElement.setRotationOrigin(toProps.rotationOrigin);
    }
  }
}
