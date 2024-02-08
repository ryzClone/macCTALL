import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class Delivery extends Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Tanlangan manzil ma`lumoti: ', latLng))
      .catch(error => console.error('Manzil ma`lumotlarini olishda xatolik:', error));
  };

  render() {
    return (
      <div>
        <PlacesAutocomplete value={this.state.address} onChange={this.handleChange} onSelect={this.handleSelect}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input {...getInputProps({ placeholder: 'Manzilni kiriting' })} />
              <div>
                {loading ? <div>Yuklanmoqda...</div> : null}

                {suggestions.map(suggestion => {
                  const style = {
                    backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                  };

                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  }
}

export default Delivery;
