## Steps to clone it Locally 


### Run this command in the terminal

```
git clone https://github.com/dexter-ifti/pagagi-task.git
```

### install dependencies 

``` 
npm install
npm install react-router-dom
npm install axios
```

**Task Overview:**

1. **Campaign Handling:**
   - **Create Campaign:**
     - Designed and implemented a page to gather campaign details including supported languages, voices, and knowledge base content.
     - Integrated the 'get supported languages' and 'get supported voices' endpoints to populate the page options.
     - Implemented functionality for creating a new campaign using the 'create campaign' endpoint.
   - **Update Campaign:**
     - Designed and implemented a page similar to the campaign creation page for updating campaigns.
     - Integrated the 'update campaign' endpoint to update existing campaigns with new data.

2. **Knowledge Base Integration:**
   - Added functionality to upload a URL, PDF, or document.
   - Extracted data from the uploaded content and integrated it into the knowledge base using the relevant API endpoint.

3. **Call Handling:**
   - **Make a Call:**
     - Designed a form for users to enter call details and upload a CSV for contact info.
     - Integrated the 'make a call' endpoint to initiate calls from the backend.
   - **Call Status:**
     - Implemented functionality to display the status of calls using the 'call status' endpoint.
   - **Get Transcription:**
     - Provided a field for users to enter a call ID and retrieve transcriptions using the 'get transcription' endpoint.
   - **Post Call Analysis:**
     - Enabled campaigns for post-call analysis.
     - Provided a field for users to enter a call ID and retrieve the analysis using the 'post call analysis' endpoint.

**Testing and Validation:**
- Tested all functionalities to ensure they work as expected.
- Validated the data being sent and received from the API.

**Documentation:**
- Provided clear documentation of the code and the campaign and call handling process.
- Included steps for setting up the development environment and running the project.

