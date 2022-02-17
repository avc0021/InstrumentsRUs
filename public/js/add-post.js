    //Instantiating dialog with Filestack
    const client = filestack.init(AXKRQb2VzQvmGCgSVGz2nz);
    // const options = {
    //     fromSources: ["local_file_system","instagram","facebook"],
    //     storeTo: {
    //         location:'images',
    //         path: '/public/css/images'
    //     }
    //   };
    //client.picker({});
    function pickMark() {
      console.log("Picking Watermark")
    };

async function newFormHandler(event) {
    event.preventDefault();
    
    const instrument = document.querySelector('input[name="instrument"]').value;
    const brand_name= document.querySelector('textarea[name="brand-name"]').value;
    const price = document.querySelector('textarea[name="price"]').value;
    const url = document.querySelector('input[name="url"]').value;

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        instrument,
        brand_name,
        price,
        url,
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