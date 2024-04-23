import { useState, useEffect } from 'react';
import './CodeCopyButton.scss';

function CodeCopyButton() {
	const DURATION = 500;
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if(!copied) return;
		const timeoutId = setTimeout(() => setCopied(false), DURATION);
		return () => clearTimeout(timeoutId);
	}, [copied]);

	return (
		<div className="codeCopyButton" onClick={() => setCopied(true)}>
			{copied
				? <i className="bi bi-check-lg"></i>
				: <i className="bi bi-clipboard"></i>
			}
		</div>
	);
}

export default CodeCopyButton;