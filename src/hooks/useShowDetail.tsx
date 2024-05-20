import { useEffect, useState } from 'react';
import api from '../api/tvshowDB';
import { Cast, FullCredits } from '../interfaces/castInterface';
import { ShowFull } from '../interfaces/showInterface';

interface ShowDetail {
  cast: Cast[];
  showFull?: ShowFull;
  isLoading: boolean;
}

export const useShowDetail = (serieId: number) => {
  const [state, setState] = useState<ShowDetail>({
    isLoading: true,
    showFull: undefined,
    cast: [],
  });

  const getShowDetails = async () => {
    const detailPromise = api.get<ShowFull>(`/tv/${serieId}`);
    const castPromise = api.get<FullCredits>(`/tv/${serieId}/credits`);

    const [detailResp, castResp] = await Promise.all([
      detailPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      showFull: detailResp.data,
      cast: castResp.data.cast,
    });
  };

  useEffect(() => {
    getShowDetails();
  }, []);

  return {
    ...state,
  };
};
