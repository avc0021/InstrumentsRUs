async function newFormHandler(event) {
    event.preventDefault();
  
    const client = filestack.init(AXKRQb2VzQvmGCgSVGz2nz);
    const options = {
        fromSources: ["local_file_system","instagram","facebook"],
        storeTo: {
            location:'images',
            path: '/public/css/images'
        }
      };
    client.picker(options).open();
    
    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);