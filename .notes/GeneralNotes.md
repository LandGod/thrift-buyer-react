# ThriftBuyer Notes

`req.user` format:

```javascript
{ id: 1,
  userName: 'TestUserOne',
  email: 'UserOne@test.domain',
  password:
   '$2a$10$VGiV8bfEApPJ51MVlhYChe8CvF461a0ZpNPMm0kv6n28BHTMvcnpq',
  createdAt: '2019-10-16T00:41:41.000Z',
  updatedAt: '2019-10-16T00:41:41.000Z' }
```



Example result from geocode request:

`testGeoCode('95 1st Ave NW, Issaquah')`

```javascript
[{…}]
 0:
  address_components: Array(8)
   0: {long_name: "95", short_name: "95", types: Array(1)}
   1: {long_name: "1st Avenue Northwest", short_name: "1st Ave NW", types: Array(1)}
   2: {long_name: "Olde Town", short_name: "Olde Town", types: Array(2)}
   3: {long_name: "Issaquah", short_name: "Issaquah", types: Array(2)}
   4: {long_name: "King County", short_name: "King County", types: Array(2)}
   5: {long_name: "Washington", short_name: "WA", types: Array(2)}
   6: {long_name: "United States", short_name: "US", types: Array(2)}
   7: {long_name: "98027", short_name: "98027", types: Array(1)}

  formatted_address: "95 1st Ave NW, Issaquah, WA 98027, USA"
  geometry:
   bounds: _.he {oa: ge, ka: ce}
   location: _.L
   lat: ƒ ()
   lng: ƒ ()

  location_type: "ROOFTOP"
  viewport: _.he {oa: ge, ka: ce}
    
  place_id: "ChIJYUlL-X9vkFQRO3RWb807g5o"
  types: Array(1)
   0: "premise"

```

pure latitude: `results[0].geometry.location.lat()`

pure longitude: `results[0].geometry.location.lng()` 



------

distance between two points

------------------

The distance between each degree of longitude or latitude is ROUGHLY (oh so roughly because this distance varies greatly depending upon where on earth you are) 69 miles. So for the purposes of database lookup:

50 mi equalsish 0.72 lat or lng degrees

10 mi equalsish 0.145 lat or lng degrees

100 mi equalsish 1.45

500 mi equalsish 7.25

