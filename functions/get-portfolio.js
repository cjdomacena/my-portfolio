const Airtable = require('airtable');
require('dotenv').config()



exports.handler = async () =>
{


	const formatData = (statusCode, data) =>
	{
		return {
			statusCode,
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		}
	}

	if (!process.env.AIRTABLE_API_KEY)
	{
		return formatData(500, { message: 'API KEY required' });
	}
	const app = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY, }).base(
		process.env.AIRTABLE_APP_ID,
	);

	const table = app('portfolio');

	try
	{
		const allRecords = []
		await table.select({ view: 'Grid view' }).eachPage(function page(records, fetchNextPage)
		{
			records.forEach(record =>
			{
				allRecords.push(record._rawJson.fields)
			})
			fetchNextPage();
		});
		return formatData(200, allRecords);
	} catch (error)
	{
		return formatData(error.statusCode, {
			message: error.message,
		});
	}
}
