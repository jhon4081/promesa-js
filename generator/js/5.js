function* generator() {
    throw new Error('Error Occured');
  }
    
  const it = generator();
  it.next();