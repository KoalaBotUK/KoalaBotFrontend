from django import forms


class IDSettings(forms.Form):
    guild_id = forms.CharField(required=True)
    channel_id = forms.CharField(required=True)


class MessageForm(forms.Form):
    view_message = forms.CharField(disabled=True)
    edit_message = forms.CharField(required=False)


class UserForm(forms.Form):
    add_user = forms.CharField(required=False)
    remove_user = forms.CharField(required=False)


class TeamForm(forms.Form):
    add_team = forms.CharField(required=False)
    remove_team = forms.CharField(required=False)

