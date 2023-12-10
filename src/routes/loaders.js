import { getContacts } from '../contacts';

export async function loader({ params }) {
	const contacts = await getContacts(params.contactId);
	return { contacts };
}
