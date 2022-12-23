let data = {
	username: "LincHwyJournal", // No leading @ here
	homeLabel: "Lincoln Highway Journal",
	homeUrl: "https://lincolnhighwayjournal.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;
