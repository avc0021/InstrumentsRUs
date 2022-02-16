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
    
    //const title = document.querySelector('input[name="post-title"]').value;
    //const post_url ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbanjo.com%2Fproduct%2Fdeering-julia-belle-5-string-banjo%2F&psig=AOvVaw0wmRhUOlVIFDv9zp98RPa7&ust=1645063406895000&source=images&cd=vfe&ved=0CAcQjRxqFwoTCOi3_vGQg_YCFQAAAAAdAAAAABAF"
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        // title,
         //post_url
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
  
  document.getElementById('submit').addEventListener('submit', newFormHandler);