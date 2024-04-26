import { app } from '@infra/http/app';
import api from '@config/api';

const apiConfig = api();

app.listen(apiConfig.PORT, () => {
  console.log(`Server running on http://localhost:${apiConfig.PORT}`);
});
