package journlr.journlr;

import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.model_objects.credentials.ClientCredentials;
import com.wrapper.spotify.requests.authorization.client_credentials.ClientCredentialsRequest;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfiguration {

    private String spotifyClientId = "4fd8c6ad55e14c3995f63d5c3200b450";

    
    @Bean(name="spotifyApi")
    public SpotifyApi spotifyApiService() {
        SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setClientId(spotifyClientId)
            .setClientSecret(spotifySecret)
            .build();
        ClientCredentialsRequest clientCredentialsRequest = spotifyApi.clientCredentials().build();
        try {
            ClientCredentials clientCredentials = clientCredentialsRequest.execute();
            spotifyApi.setAccessToken(clientCredentials.getAccessToken());
            System.out.println("expires in " + clientCredentials.getExpiresIn());
            return spotifyApi;           
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
    }

}
