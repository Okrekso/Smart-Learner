package localdevs.smartlearner.Page_Fragments;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import localdevs.smartlearner.MainPage;
import localdevs.smartlearner.R;

public class LogIn extends Fragment {

    private static final String _Username = "Username";
    private static final String _Password = "Password";

    private EditText Username;
    private EditText Password;

    private Button login;

      @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_log_in, container, false);
    }

    @Override
    public void onStart() {
        super.onStart();
        LogInOnClick();
    }

    public void LogInOnClick()
    {
        Username = (EditText)getActivity().findViewById(R.id.username);
        Password = (EditText)getActivity().findViewById(R.id.password);
        Username.setText("Username");
        Password.setText("Password");
        login = (Button)getActivity().findViewById(R.id.login);
        login.setOnClickListener(
                new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        if(_Username.equals(String.valueOf(Username.getText())) && _Password.equals(String.valueOf(Password.getText()))){
                            Toast.makeText(
                                    getActivity(), "All Ok.",Toast.LENGTH_SHORT
                            ).show();
                        }
                        else {
                            Toast.makeText(
                                    getActivity(), "Error.",Toast.LENGTH_SHORT
                            ).show();
                        }
                    }
                }
        );
    }
}
