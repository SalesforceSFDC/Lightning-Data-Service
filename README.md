# Lightning-Data-Service

## Considerations
* [LDS Considerations](https://developer.salesforce.com/docs/atlas.en-us.210.0.lightning.meta/lightning/data_service_considerations.htm)

## `force:recordData`

* `recordId` specifies the record to load. Records can’t be loaded without a `recordId`.
* `mode` can be set to either EDIT or VIEW, which determines the behavior of notifications and what operations are available to perform with the record. If you’re using `force:recordData` to change the record in any way, set the mode to EDIT.
* `layoutType` specifies the layout (FULL or COMPACT) that is used to display the record.
* `fields` specifies which fields in the record to query. The `fields` or `layoutType` attribute (or both) must be provided.
* `force:recordData` tag is just the logic used to communicate with the server and manage the local cache.
* `force:recordData` tag uses the UI API to provide data to your UI components.
### 1. Loading Data
* The first thing you do to make a record available for your UI components is to load it.
